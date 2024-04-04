import "react-router-dom";
import type { UIMatch } from "react-router-dom";

import type { RouteMeta } from "@/router/types";

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

declare module "react-router-dom" {
	function useMatches(): UIMatch<unknown, RouteMeta>[];
}
