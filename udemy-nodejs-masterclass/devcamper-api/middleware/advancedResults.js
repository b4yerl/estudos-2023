const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  // Copying query to variable
  const reqQuery = { ...req.query };
  
  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];
  
  // Loop over removeFields and delete'em from reqQuery
  removeFields.forEach(key => delete reqQuery[key])
  
  // Creating query operators
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|le|lte|in)\b/g, match => `$${match}`);

  // Finding Resource
  query = model.find(JSON.parse(queryStr))

  // Select Fields
  if(req.query.select) {
    const fields = req.query.select.replaceAll(',', ' ')
    query.select(fields)
  }
  
  // Sort by
  if(req.query.sort) {
    console.log(req.query)
    const sortBy = req.query.sort.replaceAll(',', ' ')
    query.sort(sortBy)
  } else {
    query.sort('-createdAt')
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const startingIndex = (page - 1) * limit;
  const endingIndex = page * limit;
  const totalDocuments = await model.countDocuments();

  query = query.skip(startingIndex).limit(limit);

  if(populate) query = await query.populate(populate);

  const results = await query;

  // Pagination result
  const pagination = {};

  if(endingIndex < totalDocuments) {
    pagination.next = {
      page: page + 1,
      limit
    }
  }

  if(startingIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    }
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results
  }

  next()
};

module.exports = advancedResults;