import mongoose from "mongoose";

const CampaignsSchema = mongoose.Schema({
  name_advertiser: String,
  segmentation: String,
  price: String,
  conversion: String,
});

export default CampaignsSchema;
