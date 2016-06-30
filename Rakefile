require "bundler/setup"

namespace :assets do
  task :precompile do
    sh "middleman build"
  end
end

task :deploy do
  sh "middleman build"
  sh "middleman deploy"
  puts "Deploy Successful! YOU ARE DA (WO)MAN!"
end