class ProjectFoldersController < ApplicationController
  before_action :set_project_folder, only: [:show, :update, :destroy]

  # GET /project_folders
  def index
    @project_folders = ProjectFolder.all

    render json: @project_folders
  end

  # GET /project_folders/1
  def show
    render json: @project_folder
  end

  # POST /project_folders
  def create
    @project_folder = ProjectFolder.new(project_folder_params)

    if @project_folder.save
      render json: @project_folder, status: :created, location: @project_folder
    else
      render json: @project_folder.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /project_folders/1
  def update
    if @project_folder.update(project_folder_params)
      render json: @project_folder
    else
      render json: @project_folder.errors, status: :unprocessable_entity
    end
  end

  # DELETE /project_folders/1
  def destroy
    @project_folder.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_folder
      @project_folder = ProjectFolder.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_folder_params
      params.fetch(:project_folder, {})
    end
end
