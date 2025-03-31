 Rails.application.config.middleware.insert_before 0, Rack::Cors do
   allow do
    origins do |origin, _env|
      if Rails.env.production?
        ENV.fetch("FRONTEND_URL", "https://nagovets.ru") # Используем переменную окружения
      else
        "http://localhost:5173" # Для разработки (Vite)
      end
    end

     resource '*',
       headers: :any,
       credentials: true,
       methods: [:get, :post, :put, :patch, :delete, :options, :head]
   end
 end