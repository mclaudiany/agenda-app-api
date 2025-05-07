const Auditoria = require("../models/auditoria");

exports.listarLogsAuditoria = async (req, res) => {
  try {
    
    const logs = await Auditoria.findAll({ order: [["createdAt", "DESC"]] });
    res.json(logs);

  } catch (error) {
     res.status(400).json({ error: err.message });
  }
};
