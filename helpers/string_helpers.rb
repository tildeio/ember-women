module StringHelpers
  def toggled_content(string)
    <<-HTML
    <div class="toggled-content">
      #{multiline string}
    </div>
    HTML
  end

  def multiline(string)
    return "" if string.nil?
    string.split(%r{(?:<br( /)?>)+}).map { |s| "<p>#{s}</p>" }.join
  end

  def session_type(speaker)

  end
end
