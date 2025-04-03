class User < ApplicationRecord
	has_secure_password
  enum :role, { user: 0, admin: 1 }

  validates :email,
            format: { with: URI::MailTo::EMAIL_REGEXP },
            presence: true,
            uniqueness: { case_sensitive: false }

end
