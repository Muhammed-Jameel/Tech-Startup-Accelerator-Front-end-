import * as React from "react";
import type { TrackedPromise, InitialEntry, Location, Router as RemixRouter, To } from "@remix-run/router";
import { Action as NavigationType } from "@remix-run/router";
import type { IndexRouteObject, RouteMatch, RouteObject, Navigator, NonIndexRouteObject, RelativeRoutingType } from "./context";
export interface RouterProviderProps {
    fallbackElement?: React.ReactNode;
    router: RemixRouter;
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
export declare function RouterProvider({ fallbackElement, router, }: RouterProviderProps): React.ReactElement;
export interface MemoryRouterProps {
    basename?: string;
    children?: React.ReactNode;
    initialEntries?: InitialEntry[];
    initialIndex?: number;
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
export declare function MemoryRouter({ basename, children, initialEntries, initialIndex, }: MemoryRouterProps): React.ReactElement;
export interface NavigateProps {
    to: To;
    replace?: boolean;
    state?: any;
    relative?: RelativeRoutingType;
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
export declare function Navigate({ to, replace, state, relative, }: NavigateProps): null;
export interface OutletProps {
    context?: unknown;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
export declare function Outlet(props: OutletProps): React.ReactElement | null;
export interface PathRouteProps {
    caseSensitive?: NonIndexRouteObject["caseSensitive"];
    path?: NonIndexRouteObject["path"];
    id?: NonIndexRouteObject["id"];
    loader?: NonIndexRouteObject["loader"];
    action?: NonIndexRouteObject["action"];
    hasErrorBoundary?: NonIndexRouteObject["hasErrorBoundary"];
    shouldRevalidate?: NonIndexRouteObject["shouldRevalidate"];
    handle?: NonIndexRouteObject["handle"];
    index?: false;
    children?: React.ReactNode;
    element?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
}
export interface LayoutRouteProps extends PathRouteProps {
}
export interface IndexRouteProps {
    caseSensitive?: IndexRouteObject["caseSensitive"];
    path?: IndexRouteObject["path"];
    id?: IndexRouteObject["id"];
    loader?: IndexRouteObject["loader"];
    action?: IndexRouteObject["action"];
    hasErrorBoundary?: IndexRouteObject["hasErrorBoundary"];
    shouldRevalidate?: IndexRouteObject["shouldRevalidate"];
    handle?: IndexRouteObject["handle"];
    index: true;
    children?: undefined;
    element?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
}
export declare type RouteProps = PathRouteProps | LayoutRouteProps | IndexRouteProps;
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
export declare function Route(_props: RouteProps): React.ReactElement | null;
export interface RouterProps {
    basename?: string;
    children?: React.ReactNode;
    location: Partial<Location> | string;
    navigationType?: NavigationType;
    navigator: Navigator;
    static?: boolean;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
export declare function Router({ basename: basenameProp, children, location: locationProp, navigationType, navigator, static: staticProp, }: RouterProps): React.ReactElement | null;
export interface RoutesProps {
    children?: React.ReactNode;
    location?: Partial<Location> | string;
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
export declare function Routes({ children, location, }: RoutesProps): React.ReactElement | null;
export interface AwaitResolveRenderFunction {
    (data: Awaited<any>): React.ReactNode;
}
export interface AwaitProps {
    children: React.ReactNode | AwaitResolveRenderFunction;
    errorElement?: React.ReactNode;
    resolve: TrackedPromise | any;
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
export declare function Await({ children, errorElement, resolve }: AwaitProps): JSX.Element;
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */
export declare function createRoutesFromChildren(children: React.ReactNode, parentPath?: number[]): RouteObject[];
/**
 * Renders the result of `matchRoutes()` into a React element.
 */
export declare function renderMatches(matches: RouteMatch[] | null): React.ReactElement | null;
/**
 * @private
 * Walk the route tree and add hasErrorBoundary if it's not provided, so that
 * users providing manual route arrays can just specify errorElement
 */
export declare function enhanceManualRouteObjects(routes: RouteObject[]): RouteObject[];
