export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.employmenthero.com/public/v1/careers/jobs",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "org-id": "ee9fb5ab-9d97-4839-93d6-12e8259a46ee",
          "Authorization": "Bearer V_IWxAEnViT3Vku_CSYL7A"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Employment Hero API error" });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
