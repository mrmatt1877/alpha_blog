module ApplicationHelper
  def gravatar_for(user, options = { size: 80})
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    size = options[:size]
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
    image_tag(gravatar_url, alt: user.username)
  end
  def flash_class(level)
    case level.to_sym
    when :notice then "light-blue accent-2"
    when :success then "teal accent-3"
    when :error then "white-text red darken-3"
    when :danger then "white-text deep-orange accent-4"
    end
  end
end
