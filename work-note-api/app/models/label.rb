class Label < ApplicationRecord

    belongs_to :user
    belongs_to :labelable, polymorphic: true
end
