class Card < ApplicationRecord
  belongs_to :bug_book
  has_many :bugs
end
