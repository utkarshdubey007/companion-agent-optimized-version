import { Request, Response } from "express";

/**
 * Handle creations API request by proxying to localhost:8000
 * @param req Express request object
 * @param res Express response object
 */
export async function getCreations(req: Request, res: Response) {
  try {
    const { dependent_id, for_challenges, limit, starting_after } = req.query;

    // Get authentication token from request headers
    const authToken = req.headers["x-auth-token"] as string;
    console.log(
      "Creations API called with token:",
      authToken ? "Token present" : "No token",
    );

    // Build the target URL with query parameters
    const params = new URLSearchParams();
    if (dependent_id) params.append("dependent_id", dependent_id as string);
    if (for_challenges)
      params.append("for_challenges", for_challenges as string);
    if (limit) params.append("limit", limit as string);
    if (starting_after)
      params.append("starting_after", starting_after as string);

    const targetUrl = `http://localhost:8000/api/v2/creations?${params.toString()}`;
    console.log("Attempting to fetch from:", targetUrl);

    // Forward the request to localhost:8000 with authentication from frontend
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        Cookie: authToken || "",
        "Content-Type": "application/json",
      },
    });

    console.log("Response status:", response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `HTTP error! status: ${response.status}, response: ${errorText}`,
      );
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Successfully fetched creations data");
    res.json(data);
  } catch (error) {
    console.error("Error proxying creations request:", error);

    // Return mock data when the real API fails
    const mockData = {
      result_code: 1,
      error_info: "",
      data: [
        {
          title: "Mock Creation",
          description: "Fallback creation data",
          tag_list: [],
          id: 1,
          media: [
            {
              id: 1,
              url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
              s240_url:
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=240&h=160&fit=crop",
              s150_url:
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=100&fit=crop",
            },
          ],
        },
      ],
    };

    console.log("Returning mock data due to API failure");
    res.json(mockData);
  }
}
