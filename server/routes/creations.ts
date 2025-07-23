import { Request, Response } from "express";

/**
 * Handle creations API request by proxying to localhost:8000
 * @param req Express request object
 * @param res Express response object
 */
export async function getCreations(req: Request, res: Response) {
  try {
    const { dependent_id, for_challenges, limit, starting_after } = req.query;
    
    // Build the target URL with query parameters
    const params = new URLSearchParams();
    if (dependent_id) params.append('dependent_id', dependent_id as string);
    if (for_challenges) params.append('for_challenges', for_challenges as string);
    if (limit) params.append('limit', limit as string);
    if (starting_after) params.append('starting_after', starting_after as string);
    
    const targetUrl = `http://localhost:8000/api/v2/creations?${params.toString()}`;

    // Forward the request to localhost:8000 with authentication
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Cookie': '_fbp=fb.0.1752251216171.237035461266330472; _ga=GA1.1.760378924.1752251225; __stripe_mid=950d6f3c-dbf1-4223-856e-8c637002fc643f7797; sessionid=ym7qxiur5kruzip1lv7jgrtp2fc9b7rt; _ga_JN6T86SWNW=GS2.1.s1753266506$o37$g1$t1753268076$j59$l0$h0',
        'Content-Type': 'application/json'
      }
    });

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
