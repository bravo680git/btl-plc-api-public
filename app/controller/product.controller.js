import ProductModel from "../model/product.model.js";

const get = async (req, res) => {
  const { fromDate, endDate } = req.query ? req.query : {};
  if (!(endDate && fromDate)) {
    res.status(400).json("Date query is required");
  } else if (endDate < fromDate) {
    res.status(400).json("Query is invalid");
  } else {
    try {
      const report = await ProductModel.find({
        dateTime: {
          $gte: Date.parse(fromDate),
          $lte: Date.parse(endDate),
        },
      });
      res.json(report);
    } catch (error) {
      res.status(500).json("Fail to get product report: " + error);
    }
  }
};

const getAll = async (req, res) => {
  try {
    const report = await ProductModel.find({});
    res.json(report);
  } catch (error) {
    res.status(500).json("Fail to get all products report: " + error);
  }
};

const create = async (req, res) => {
  const reports = req.body;
  try {
    for (let i = 0; i < reports.length; i++) {
      reports[i].dateTime = new Date(reports[i].dateTime);
      await ProductModel.create(reports[i]);
    }
    res.json("Create new report successfully");
  } catch (error) {
    res.status(500).json("Fail to create new report" + error);
  }
};

export { get, getAll, create };
