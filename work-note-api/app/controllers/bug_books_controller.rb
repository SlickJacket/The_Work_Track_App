class BugBooksController < ApplicationController
  before_action :set_bug_book, only: [:show, :update, :destroy]

  # GET /bug_books
  def index
    @bug_books = BugBook.all

    render json: @bug_books
  end

  # GET /bug_books/1
  def show
    render json: @bug_book
  end

  # POST /bug_books
  def create
    @bug_book = BugBook.new(bug_book_params)

    if @bug_book.save
      render json: @bug_book, status: :created, location: @bug_book
    else
      render json: @bug_book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bug_books/1
  def update
    if @bug_book.update(bug_book_params)
      render json: @bug_book
    else
      render json: @bug_book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bug_books/1
  def destroy
    @bug_book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bug_book
      @bug_book = BugBook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bug_book_params
      params.fetch(:bug_book, {})
    end
end
