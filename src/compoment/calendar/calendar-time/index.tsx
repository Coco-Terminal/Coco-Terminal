import React from 'react'
import './index.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Calendar, Select, Radio, Col, Row, Typography } from 'antd'
export default function CaledarTime() {
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode)
  }
  return (
    <div>
      <div className="site-calendar-customize-header-wrapper">
        <Calendar
          fullscreen={false}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0
            const end = 12
            const monthOptions = []

            const current = value.clone()
            const localeData = value.localeData()
            const months = []
            for (let i = 0; i < 12; i++) {
              current.month(i)
              months.push(localeData.monthsShort(current))
            }

            for (let index = start; index < end; index++) {
              monthOptions.push(
                <Select.Option className="month-item" key={`${index}`}>
                  {months[index]}
                </Select.Option>
              )
            }
            const month = value.month()

            const year = value.year()
            const options = []
            for (let i = year - 10; i < year + 10; i += 1) {
              options.push(
                <Select.Option key={i} value={i} className="year-item">
                  {i}
                </Select.Option>
              )
            }
            const icon = '111'
            return (
              <div className="datetime">
                <Row className="datetime_one">
                  <LeftOutlined />
                  <Col className="datetime_one_one">
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      className="my-year-select"
                      onChange={(newYear) => {
                        const now = value.clone().year(Number(newYear))
                        onChange(now)
                      }}
                      value={String('september' + year)}
                    >
                      {options}
                    </Select>
                  </Col>

                  <RightOutlined />
                </Row>
              </div>
            )
          }}
          onPanelChange={onPanelChange}
        />
      </div>
    </div>
  )
}
