class Bug < ApplicationRecord
    belongs_to :bug_book

    has_many :labels, as: :labelable
end
