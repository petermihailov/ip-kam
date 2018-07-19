import {
  dvrs,
  power,
  cams,
  hdds,
  materials,
  installation,
} from './../../../data/products'
import { data as bonusData } from './../survey/bonus-question'

export function sumSectionPrice(section) {
  return section.reduce((sum, itm) => sum + itm.price * itm.count, 0)
}

function calculateByQuantity(n, arr) {
  const { list } = arr.reduce(
    (res, product, i) => {
      const isLast = arr.length - 1 === i
      const max = product.meta.max_cam_quantity

      let count = Math.floor(res.rest / max)
      let rest = res.rest % max
      let list = [...res.list]

      if (rest > max / 2 || (isLast && rest !== 0)) {
        count += 1
        rest = 0
      }

      if (count > 0) {
        list.push({ ...product, count })
      }

      return { ...res, rest, list }
    },
    { rest: n, list: [] }
  )

  return list
}

function getCamList({ insideCams, outsideCams }) {
  const getCam = (type, count) => {
    const cam = cams.find(cam => cam.meta.type === type)
    return { ...cam, count }
  }

  const insideCam = getCam('inside', insideCams)
  const outsideCam = getCam('outside', outsideCams)

  return [insideCam, outsideCam].filter(cam => cam.count > 0)
}

function getHddList(arr) {
  return arr.map(capacity => {
    const hdd = hdds.find(h => h.meta.capacity === capacity)
    return { ...hdd, count: 1 }
  })
}

function getMaterials(camsCount) {
  const utp5e = { ...materials[0], count: camsCount * 15 } // шнурок
  const rg45 = { ...materials[1], count: 2 }
  const other = { ...materials[2], price: camsCount * 240, count: 1 }

  return [utp5e, rg45, other]
}

function getInstallationList(dvrsCount, camsCount) {
  const installDvr = { ...installation[0], count: dvrsCount }
  const installCam = { ...installation[1], count: camsCount }
  const installConnectors = { ...installation[2], count: camsCount * 2 }
  const installCable = { ...installation[3], count: camsCount * 15 }
  const other = { ...installation[4], price: camsCount * 240, count: 1 }

  return [installDvr, installCam, installConnectors, installCable, other]
}

function getBonus(num, insallationList) {
  switch (parseInt(num)) {
    case 1:
      return {
        name: bonusData[num],
        count: -1,
        price: cams[0].price,
      }
    case 2: {
      const discount = sumSectionPrice(insallationList) * 0.1

      return {
        name: bonusData[num],
        count: 1,
        price: -discount,
      }
    }
    default:
      return {
        name: bonusData[num],
        count: 1,
        price: 0,
      }
  }
}

export default function getEstimate({
  insideCams = 0,
  outsideCams = 0,
  bonus,
}) {
  const camsCount = parseInt(insideCams) + parseInt(outsideCams)
  const dvrList = calculateByQuantity(camsCount, [...dvrs].reverse())
  const powerList = calculateByQuantity(camsCount, [...power].reverse())
  const camList = getCamList({ insideCams, outsideCams })
  const hddList = getHddList([500])
  const materialsList = getMaterials(camsCount)
  const insallationList = getInstallationList(dvrList.length, camsCount)

  const result = [
    {
      label: 'Оборудование',
      data: [...dvrList, ...camList, ...hddList, ...powerList],
    },
    {
      label: 'Материалы',
      data: [...materialsList],
    },
    {
      label: 'Монтажные работы',
      data: [...insallationList],
    },
  ]

  if (bonus && bonus > 0 && bonus < bonusData.length && camsCount > 3) {
    result.push({
      label: 'Бонусы',
      data: [getBonus(bonus, insallationList)],
    })
  }

  return result
}
