class ProjectFolder < ApplicationRecord
  belongs_to :user
  has_many :note_books
  has_many :bug_books

  has_many :labels, as: :labelable
end
