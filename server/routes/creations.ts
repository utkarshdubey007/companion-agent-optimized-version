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
    const authToken = req.headers['x-auth-token'] as string;
    console.log('Creations API called with token:', authToken ? 'Token present' : 'No token');

    // Build the target URL with query parameters
    const params = new URLSearchParams();
    if (dependent_id) params.append('dependent_id', dependent_id as string);
    if (for_challenges) params.append('for_challenges', for_challenges as string);
    if (limit) params.append('limit', limit as string);
    if (starting_after) params.append('starting_after', starting_after as string);

    const targetUrl = `http://localhost:8000/api/v2/creations?${params.toString()}`;
    console.log('Attempting to fetch from:', targetUrl);

    // Forward the request to localhost:8000 with authentication from frontend
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Cookie': authToken || '',
        'Content-Type': 'application/json'
      }
    });

    console.log('Response status:', response.status, response.statusText);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying creations request:', error);
    res.status(500).json({
      result_code: 0,
      error_info: "Failed to fetch creations",
      data: []
    });
  }
}
