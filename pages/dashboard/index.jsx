"use client";

import AdminLayout from "@/components/AdminLayout";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FaBoxOpen, FaUserShield, FaLayerGroup, FaTags } from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    totalTypes: 0,
  });

  // Fetch stats from Supabase
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Total Products
      const { count: productsCount } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true });

      // Total Categories
      const { count: categoriesCount } = await supabase
        .from("categories")
        .select("*", { count: "exact", head: true });

      // Total Types
      const { count: typesCount } = await supabase
        .from("types")
        .select("*", { count: "exact", head: true });

      setStats({
        totalProducts: productsCount || 0,
        totalCategories: categoriesCount || 0,
        totalTypes: typesCount || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary tracking-wide">
            BRIDGE PHARMACEUTICALS LIMITED
          </h1>
          <p className="text-sm text-soft_black mt-1">Admin Control Dashboard</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Status</p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            System Active
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border_color" />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Total Products */}
        <div className="bg-white rounded-xl border border-border_color p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h3 className="text-3xl font-bold text-soft_black mt-2">
                {stats.totalProducts}
              </h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl">
              <FaBoxOpen />
            </div>
          </div>
        </div>

        {/* Total Categories */}
        <div className="bg-white rounded-xl border border-border_color p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Categories</p>
              <h3 className="text-3xl font-bold text-soft_black mt-2">
                {stats.totalCategories}
              </h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center text-xl">
              <FaTags />
            </div>
          </div>
        </div>

        {/* Total Types */}
        <div className="bg-white rounded-xl border border-border_color p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Types</p>
              <h3 className="text-3xl font-bold text-soft_black mt-2">
                {stats.totalTypes}
              </h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl">
              <FaLayerGroup />
            </div>
          </div>
        </div>

        {/* Admin */}
        <div className="bg-white rounded-xl border border-border_color p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Administrator</p>
              <h3 className="text-lg font-semibold text-soft_black mt-2">
                Logged In
              </h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-xl">
              <FaUserShield />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Dashboard;
