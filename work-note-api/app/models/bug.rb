class Bug < ApplicationRecord
    belongs_to :card

    has_many :labels, as: :labelable
end
