export default async function handler(req, res) {
  try {
    const apiUrl = `https://api.employmenthero.com/public/v1/organisations/ee9fb5ab-9d97-4839-93d6-12e8259a46ee/jobs`;
    const response = await fetch(apiUrl, {
      headers: {
        "Authorization": "Bearer V_IWxAEnViT3Vku_CSYL7A"
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
