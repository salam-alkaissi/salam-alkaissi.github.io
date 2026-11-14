export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  url: string;
};

export const projects: Project[] = [
  {
    id: 'docurag',
    title: 'DocuRAG — Intelligent Document Analysis',
    category: 'Document intelligence · RAG',
    description:
      'A document analysis application for PDF and text files, with language detection, domain classification, summaries, keyword extraction, semantic search, and question answering. The retrieval code combines TF-IDF and Sentence Transformer similarity.',
    technologies: ['Python', 'Gradio', 'Sentence Transformers', 'scikit-learn', 'PyTorch', 'Gemini'],
    url: 'https://github.com/salam-alkaissi/LLM-RAG-Project',
  },
  {
    id: 'earth-observation',
    title: 'Land Surface Temperature Super-Resolution',
    category: 'Earth observation · Machine learning',
    description:
      'A study of upscaling land surface temperature data for Île-de-France using NDVI as auxiliary data. The README describes DisTrad, ATPRK, RF-DMS, and CNN methods, with Landsat 8 and MODIS data for 2019.',
    technologies: ['Python', 'Jupyter', 'Google Earth Engine', 'NDVI', 'CNN'],
    url: 'https://github.com/salam-alkaissi/Topics_ML_Earth_Observation',
  },
  {
    id: 'fraud-detection',
    title: 'IEEE-CIS Fraud Detection',
    category: 'Applied machine learning',
    description:
      'Notebook-based work for the IEEE-CIS Fraud Detection Kaggle challenge. The repository README describes transaction feature engineering and comparisons involving LightGBM, CatBoost, and baseline tree models.',
    technologies: ['Python', 'Jupyter', 'LightGBM', 'CatBoost', 'scikit-learn'],
    url: 'https://github.com/salam-alkaissi/Fraud_project',
  },
  {
    id: 'translation-agent',
    title: 'Translation Agent Web UI',
    category: 'LLM applications · Translation',
    description:
      'A repository combining the upstream translation-agent package, credited to Andrew Ng in its package metadata, with a Gradio interface for document upload, multiple model endpoints, and optional reflection and revision.',
    technologies: ['Python', 'Gradio', 'OpenAI', 'Groq', 'Ollama', 'Together AI'],
    url: 'https://github.com/salam-alkaissi/Translate_Agent',
  },
  {
    id: 'weather-forecasting',
    title: 'Weather Forecasting Analysis',
    category: 'Weather data · Modeling',
    description:
      'An analysis of environmental variables from NetCDF weather data, including visualizations and temperature prediction with linear regression. The repository also contains a notebook whose filename references CNN modeling.',
    technologies: ['Python', 'Xarray', 'NetCDF', 'Linear Regression', 'CNN'],
    url: 'https://github.com/salam-alkaissi/Weather-forcast-WeatherBench2',
  },
  {
    id: 'chat-app',
    title: 'Command-Line Chat Application',
    category: 'Software engineering',
    description:
      'A C command-line chat application described in the repository README. It supports multiple clients, private and broadcast messages, configurable server ports, and saved message logs.',
    technologies: ['C'],
    url: 'https://github.com/salam-alkaissi/ChatApp-C_Project',
  },
];
