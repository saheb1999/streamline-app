import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Sparkles, TrendingUp, Brain, Zap, Shield, Database, ChevronRight } from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenue: 45000, predicted: 47000 },
  { month: 'Feb', revenue: 52000, predicted: 54000 },
  { month: 'Mar', revenue: 48000, predicted: 49000 },
  { month: 'Apr', revenue: 61000, predicted: 62000 },
  { month: 'May', revenue: 55000, predicted: 58000 },
  { month: 'Jun', revenue: 67000, predicted: 68000 },
  { month: 'Jul', revenue: 72000, predicted: 74000 },
  { month: 'Aug', revenue: 69000, predicted: 71000 },
];

const categoryData = [
  { name: 'Product A', value: 4500, color: '#10b981' },
  { name: 'Product B', value: 3200, color: '#3b82f6' },
  { name: 'Product C', value: 2800, color: '#a855f7' },
  { name: 'Product D', value: 1900, color: '#f59e0b' },
];

const performanceData = [
  { metric: 'Accuracy', score: 95 },
  { metric: 'Speed', score: 88 },
  { metric: 'Reliability', score: 92 },
  { metric: 'Security', score: 97 },
];

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced machine learning algorithms automatically detect patterns, trends, and anomalies in your data.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: TrendingUp,
    title: 'Interactive Visualizations',
    description: 'Create stunning charts and dashboards with just a few clicks. Explore your data visually.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Sparkles,
    title: 'Ask Your Data',
    description: 'Use natural language to query your datasets. Get instant answers to complex questions.',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: Zap,
    title: 'Real-Time Analytics',
    description: 'Process millions of rows instantly. Get results in seconds, not hours.',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data stays on your device. Enterprise-grade security built-in.',
    gradient: 'from-red-500 to-rose-600'
  },
  {
    icon: Database,
    title: 'Multi-Format Support',
    description: 'Upload CSV, Excel, TSV files. Export to any format you need.',
    gradient: 'from-indigo-500 to-blue-600'
  },
];

const stats = [
  { number: '100M+', label: 'Rows Analyzed' },
  { number: '50K+', label: 'Datasets Processed' },
  { number: '15+', label: 'Chart Types' },
  { number: '99.9%', label: 'Accuracy' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center px-8 py-6 backdrop-blur-xl bg-slate-950/50 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src="/Gemini_Generated_Image_nj2iclnj2iclnj2i.png"
            alt="StReamline AI Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            StReamline AI
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors">Features</a>
          <a href="#demo" className="text-slate-400 hover:text-emerald-400 transition-colors">Demo</a>
          <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</a>
        </motion.div>
      </nav>

      <section className="relative z-10 pt-20 pb-16 px-8 text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/Gemini_Generated_Image_nj2iclnj2iclnj2i.png"
            alt="StReamline AI Logo"
            className="w-32 h-32 object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 font-semibold text-sm">🚀 AI-Powered Analytics Platform</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          Transform Data
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Into Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Harness the power of AI to unlock insights from your data instantly.
          No coding required. Just upload, analyze, and discover.
        </motion.p>

        <motion.a
          href="https://streamline-sr.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-bold text-lg shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all inline-flex items-center gap-2 mx-auto"
        >
          Enter Platform
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-slate-400 text-sm mt-4"
        >
          ⚡ The analytics platform may take a few seconds to wake up if inactive.
        </motion.p>
      </section>

      <section id="features" className="relative z-10 py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-slate-900/30 backdrop-blur-xl border border-white/5 rounded-2xl"
            >
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="demo" className="relative z-10 py-20 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">See It In Action</h2>
          <p className="text-xl text-slate-400">Real-time analytics powered by AI</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-emerald-400">📈 Revenue Trend Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">📊 Category Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-purple-400">📉 Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="metric" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Bar dataKey="score" fill="#a855f7" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-amber-400">🎯 AI Predictions vs Actual</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Actual" />
                <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={3} strokeDasharray="5 5" name="AI Predicted" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative z-10 py-20 px-8 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join thousands of analysts making data-driven decisions faster
          </p>
          <motion.a
            href="https://streamline-sr.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-bold text-xl shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all flex items-center gap-2 mx-auto"
          >
            Launch Analytics Platform
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      <footer className="relative z-10 py-12 px-8 text-center border-t border-white/5">
        <p className="text-slate-500">StReamline AI • AI-Powered Analytics Platform</p>
        <p className="text-slate-600 text-sm mt-2">© 2026 All rights reserved</p>
      </footer>
    </div>
  );
}
