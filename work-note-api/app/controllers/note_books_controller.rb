class NoteBooksController < ApplicationController
  before_action :set_note_book, only: [:show, :update, :destroy]

  # GET /note_books
  def index
    @note_books = NoteBook.all

    render json: @note_books
  end

  # GET /note_books/1
  def show
    render json: @note_book
  end

  # POST /note_books
  def create
    @note_book = NoteBook.new(note_book_params)

    if @note_book.save
      render json: @note_book, status: :created, location: @note_book
    else
      render json: @note_book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /note_books/1
  def update
    if @note_book.update(note_book_params)
      render json: @note_book
    else
      render json: @note_book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /note_books/1
  def destroy
    @note_book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note_book
      @note_book = NoteBook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def note_book_params
      params.fetch(:note_book, {})
    end
end
