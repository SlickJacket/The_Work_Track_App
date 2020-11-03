class BugCommentsController < ApplicationController
  before_action :set_bug_comment, only: [:show, :update, :destroy]

  # GET /bug_comments
  def index
    @bug_comments = BugComment.all

    render json: @bug_comments
  end

  # GET /bug_comments/1
  def show
    render json: @bug_comment
  end

  # POST /bug_comments
  def create
    @bug_comment = BugComment.new(bug_comment_params)

    if @bug_comment.save
      render json: @bug_comment, status: :created, location: @bug_comment
    else
      render json: @bug_comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bug_comments/1
  def update
    if @bug_comment.update(bug_comment_params)
      render json: @bug_comment
    else
      render json: @bug_comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bug_comments/1
  def destroy
    @bug_comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bug_comment
      @bug_comment = BugComment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bug_comment_params
      params.require(:bug_comment).permit(:description, :bug_id)
    end
end
