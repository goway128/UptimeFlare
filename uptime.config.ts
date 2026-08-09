import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "白の监控",
  links: [],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'goway0128_top',
      name: '博客',
      method: 'GET',
      target: 'https://goway0128.top',
      tooltip: 'goway0128.top',
      statusPageLink: 'https://goway0128.top',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'old.life-white.uk',
      name: '老博客',
      method: 'GET',
      target: 'https:/old.life-white.uk',
      tooltip: 'old.life-white.uk',
      statusPageLink: 'https://old.life-white.uk',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'api_10dianai_com',
      name: '10点用户台',
      method: 'GET',
      target: 'https://xapi.10dian-api.top',
      tooltip: 'xapi.10dian-api.top',
      statusPageLink: 'https://xapi.10dian-api.top',
      timeout: 10000,
    },
    {
      id: 'cy_10dianai_com',
      name: '10点企业台',
      method: 'GET',
      target: 'https://newcy.10dianai.com',
      tooltip: 'newcy.10dianai.com',
      statusPageLink: 'https://newcy.10dianai.com',
      timeout: 10000,
    },
    {
      id: 'cy_10dianai_com',
      name: '10点企业台(dc)',
      method: 'GET',
      target: 'https://dcnewcy.10dianai.com',
      tooltip: 'dcnewcy.10dianai.com',
      statusPageLink: 'https://dcnewcy.10dianai.com',
      timeout: 10000,
    },
    {
      id: 'api_10dian_ai_top',
      name: '10点官网',
      method: 'GET',
      target: 'https://api.10dian-ai.top',
      tooltip: 'api.10dian-ai.top',
      statusPageLink: 'https://api.10dian-ai.top',
      timeout: 10000,
    },
  ],
  notification: undefined,
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
