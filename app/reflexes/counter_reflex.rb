class CounterReflex < ApplicationReflex

  # another option, using session
  # def step(by = 1)
  #   session[:count] = session[:count].to_i + by
  # end

  def step
    @count = element.dataset[:count].to_i + element.dataset[:step].to_i
  end
end
