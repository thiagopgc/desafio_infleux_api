import CampaignsModel from "../models/campaignsModel.js";

const CampaignsController = (app) => {
  app.post("/campaign", async (req, res) => {
    const { name_advertiser, segmentation, price, conversion } = req.body;
    if (!name_advertiser) {
      res.status(422).json({ error: "campos obrigatório!" });
      return;
    }
    const campaign = {
      name_advertiser,
      segmentation,
      price,
      conversion,
    };
    try {
      await CampaignsModel.create(campaign);
      res.status(201).json({ message: "Campaign inserida com sucesso." });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  app.get("/", async (req, res) => {
    try {
      const campaigns = await CampaignsModel.find();
      res.status(200).json(campaigns);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  app.get("/campaigns", async (req, res) => {
    try {
      const campaigns = await CampaignsModel.find();
      const valueMax = Math.max(campaigns.price);
      if (!campaigns) {
        res.status(422).json({ message: "campanha não encontrada" });
        return;
      }
      res.status(200).json(valueMax);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  app.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const { name_advertiser, segmentation, price, conversion } = req.body;
    const campaign = {
      name_advertiser,
      segmentation,
      price,
      conversion,
    };

    try {
      const updateCampaign = await CampaignsModel.updateOne(
        { _id: id },
        campaign
      );
      res.status(200).json(campaign);
      if (updateCampaign.matchedCount === 0) {
        res.status(422).json({ message: "campanha não encontrada" });
        return;
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  app.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const deleteCampaign = await CampaignsModel.deleteOne({ _id: id });
      res.status(200).json({ message: "campanha exluída!" });
      if (deleteCampaign.deletedCount == 0) {
        res.status(422).json({ message: "campanha não encontrada" });
        return;
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
};

export default CampaignsController;
