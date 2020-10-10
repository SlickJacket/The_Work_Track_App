class NoteBook < ApplicationRecord
  belongs_to :project_folder
  has_many :notes

  has_many :labels, as: :labelable
end
