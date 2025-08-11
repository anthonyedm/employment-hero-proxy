export default async function handler(req, res) {
  try {
    const response = await fetch(`https://api.employmenthero.com/careers-page/jobs?org_id=ee9fb5ab-9d97-4839-93d6-12e8259a46ee`, {
      headers: {
        "Authorization": "Bearer V_IWxAEnViT3Vku_CSYL7A",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Employment Hero API error: ${response.statusText}` });
    }

    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to load jobs" });
  }
}
