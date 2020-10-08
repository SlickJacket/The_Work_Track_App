require 'test_helper'

class ProjectFoldersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_folder = project_folders(:one)
  end

  test "should get index" do
    get project_folders_url, as: :json
    assert_response :success
  end

  test "should create project_folder" do
    assert_difference('ProjectFolder.count') do
      post project_folders_url, params: { project_folder: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show project_folder" do
    get project_folder_url(@project_folder), as: :json
    assert_response :success
  end

  test "should update project_folder" do
    patch project_folder_url(@project_folder), params: { project_folder: {  } }, as: :json
    assert_response 200
  end

  test "should destroy project_folder" do
    assert_difference('ProjectFolder.count', -1) do
      delete project_folder_url(@project_folder), as: :json
    end

    assert_response 204
  end
end
