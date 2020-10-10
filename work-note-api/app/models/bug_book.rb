class BugBook < ApplicationRecord
  belongs_to :project_folder
  has_many :bugs

  has_many :labels, as: :labelable
end
