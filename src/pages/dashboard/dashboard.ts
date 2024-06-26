import { DashboardOutlined } from "@ant-design/icons";
import { createElement, lazy } from "react";

import type { AppRouteRecordRaw } from "@/router/types";

import { ContainerLayout } from "@/layout";

const Dashboard = lazy(() => import("@/pages/dashboard"));

const routes: AppRouteRecordRaw[] = [
	{
		path: "/dashboard",
		id: "dashboard",
		Component: ContainerLayout,
		handle: {
			sort: 1,
			title: "Dashboard",
			icon: createElement(DashboardOutlined),
		},
		children: [
			{
				index: true,
				id: "dashboard_index",
				Component: Dashboard,
				handle: {
					title: "Dashboard",
					icon: createElement(DashboardOutlined),
				},
			},
		],
	},
];

export default routes;
