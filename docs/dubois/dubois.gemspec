# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "dubois"
  spec.version       = "0.0.2"
  spec.authors       = ["Dr Kim Foale"]
  spec.email         = ["kim@gfsc.studio"]

  spec.summary       = "Du Bois theme for Resistance Lab site and subsites"
  spec.homepage      = "https://github.com/Resistance-Lab/dubois"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", ">= 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
  spec.add_development_dependency "jekyll-paginate"
  spec.add_development_dependency "jekyll-autoprefixer"
end
