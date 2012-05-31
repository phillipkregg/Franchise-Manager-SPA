class FranchiseSetsController < ApplicationController
  # GET /franchise_sets
  # GET /franchise_sets.json
  def index
    @franchise_sets = FranchiseSet.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @franchise_sets }
    end
  end

  # GET /franchise_sets/1
  # GET /franchise_sets/1.json
  def show
    @franchise_set = FranchiseSet.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @franchise_set }
    end
  end

  # GET /franchise_sets/new
  # GET /franchise_sets/new.json
  def new
    @franchise_set = FranchiseSet.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @franchise_set }
    end
  end

  # GET /franchise_sets/1/edit
  def edit
    @franchise_set = FranchiseSet.find(params[:id])
  end

  # POST /franchise_sets
  # POST /franchise_sets.json
  def create
    @franchise_set = FranchiseSet.new(params[:franchise_set])

    respond_to do |format|
      if @franchise_set.save
        format.html { redirect_to @franchise_set, notice: 'Franchise set was successfully created.' }
        format.json { render json: @franchise_set, status: :created, location: @franchise_set }
      else
        format.html { render action: "new" }
        format.json { render json: @franchise_set.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /franchise_sets/1
  # PUT /franchise_sets/1.json
  def update
    @franchise_set = FranchiseSet.find(params[:id])

    respond_to do |format|
      if @franchise_set.update_attributes(params[:franchise_set])
        format.html { redirect_to @franchise_set, notice: 'Franchise set was successfully updated.' }
        format.json { render json: @franchise_set }
      else
        format.html { render action: "edit" }
        format.json { render json: @franchise_set.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /franchise_sets/1
  # DELETE /franchise_sets/1.json
  def destroy
    @franchise_set = FranchiseSet.find(params[:id])
    @franchise_set.destroy

    respond_to do |format|
      format.html { redirect_to franchise_sets_url }
      format.json { head :no_content }
    end
  end
end
