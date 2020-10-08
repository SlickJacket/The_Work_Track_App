class BugBook < ApplicationRecord
  belongs_to :project_folder
  has_many :bugs
end
