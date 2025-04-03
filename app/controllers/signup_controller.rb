class SignupController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    if user_find 
       render json: { message: "такой емайл уже зарегистрирован." }, status: :unprocessable_entity
    else
      user = User.new({:role => 0, :email => params[:email], :password => params[:password], :password_confirmation => params[:password_confirmation]})
      if user.save
        payload  = { user_id: user.id, aud: [user.role]}
        session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true, 
          namespace: "user_#{user.id}")
        tokens = session.login

        response.set_cookie(JWTSessions.access_cookie,
                            value: tokens[:access],
                            httponly: true,
                            secure: Rails.env.production?)
        render json: { csrf: tokens[:csrf] }
      else
        render json: { error: user.errors.full_messages.join(' ') }, status: :unprocessable_entity
      end
    end  
  end

  private
  def user_find
    User.where(email: params[:email]).first
  end
  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end