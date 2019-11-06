class Player < ApplicationRecord
    has_many :matches

    def as_json(options={})
        super(include: :matches)
    end
    
end