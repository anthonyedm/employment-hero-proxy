import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const orgId = "ee9fb5ab-9d97-4839-93d6-12e8259a46ee";
    const accessToken = "V_IWxAEnViT3Vku_CSYL7A";

    const apiUrl = `https://api.employmenthero.com/careers/v1/organisations/${orgId}/jobs`;

    const response = await fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`Employment Hero API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
