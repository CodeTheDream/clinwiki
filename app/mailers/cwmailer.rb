class Cwmailer < Devise::Mailer
  helper :application # gives access to all helpers defined within `application_helper`.
  include Devise::Controllers::UrlHelpers # Optional. eg. `confirmation_url`
  default template_path: 'devise/mailer' # to

  def edit_user_password_path
    _devise_route_context.send("/reset-password", *args)
  end

end
