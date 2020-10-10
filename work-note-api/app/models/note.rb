class Note < ApplicationRecord
  belongs_to :note_book

  has_many :labels, as: :labelable
end
