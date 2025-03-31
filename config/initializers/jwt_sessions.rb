JWTSessions.encryption_key = Rails.application.secret_key_base
redis_url = if Rails.env.production?
              ENV.fetch("REDIS_URL") { "redis://redis:6379/0" } # В продакшене используем контейнер Redis
            else
              "redis://127.0.0.1:6379/0" # В деве локальный Redis
            end
JWTSessions.token_store = :redis, { 
  redis_url: redis_url,
  pool_size: Integer(ENV.fetch("RAILS_MAX_THREADS", 25))
}
JWTSessions.access_exp_time = 12096000