class SigninController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authorize_access_request!, only: [:destroy]
  require 'httparty' 

  def exitgram
    # puts params[:id]
    # par = params[:id]
    # render json: par


    para =  params[:id]
    # 'https://api.telegram.org/bot5531512315:AAHmGCiQQQfdVzQrcja0c9woh5TxrrYldk8/sendMessage?chat_id=199874565&text='+para 
    # paf = URI::Parser.new
    # paf = paf.escape(mesa)
    # puts paf
    tok = Rails.application.credentials.telegramtoken
  
      puts tok

    response = HTTParty.post("https://api.telegram.org/bot5531512315:AAHmGCiQQQfdVzQrcja0c9woh5TxrrYldk8/revokeAuthorization", body: { user_id: para })
    render json: response
    # HTTParty.post(paf)
  end

  def create
     user = User.find_by(email: params[:email])
  puts user 
    if user.present?
      if user.authenticate(params[:password])
        payload  = { user_id: user.id, aud: [user.role] }
        session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true, 
        namespace: "user_#{user.id}")
        tokens = session.login
        response.set_cookie(JWTSessions.access_cookie,
                            value: tokens[:access],
                            httponly: true,
                            secure: Rails.env.production?)
        render json: { csrf: tokens[:csrf] }
      else
        # not_authorized
        render json: { message: 'Неправильный пароль' }, status: :unprocessable_entity
      end
    else
      puts 'user.email'
      render json: { message: 'Этот адрес не зарегистрирован' }, status: :not_found
    end
  end
  def destroy
    puts "---destroying---"
    session = JWTSessions::Session.new(payload: payload, namespace: "user_#{payload['user_id']}")
    session.flush_by_access_payload
    render json: :ok
  end  

  private
  
  def not_found
    render json: { error: 'Cannont find such email/password combination' }, status: :not_found
  end    
end