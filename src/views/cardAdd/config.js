const html = `<div style="position: absolute; top: 0px; left: 0px; width: 100%;">
<div>
  <div
    class="ant-popover ant-popover-placement-leftTop"
    style=" transform-origin: -4px 0px;"
  >
    <div class="ant-popover-content">
      <div class="ant-popover-arrow"></div>
      <div class="ant-popover-inner" role="tooltip">
        <div>
          <div class="ant-popover-title">
            <div class="set-popover-title">
              <span>整体页面设置</span>
              <span class="popover-close" ref="iconSize">
                <i aria-label="图标: close" class="anticon anticon-close">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    class
                    data-icon="close"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                    />
                  </svg>
                </i>
              </span>
            </div>
          </div>
          <div class="ant-popover-inner-content">
            <div class="template-set-cont">
              <div class="template-set-form">
                <div class="set-form-item">
                  <div class="ant-row ant-form-item">
                    <div class="ant-col ant-col-6 ant-form-item-label">
                      <label class title="页面名称">页面名称</label>
                    </div>
                    <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
                      <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                          <input type="text" class="ant-input" value="首页" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="set-form-item">
                  <div class="ant-row ant-form-item">
                    <div class="ant-col ant-col-6 ant-form-item-label">
                      <label class title="URL">URL</label>
                    </div>
                    <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
                      <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                          <span class="ant-input-group-wrapper">
                            <span class="ant-input-wrapper ant-input-group">
                              <span class="ant-input-group-addon">/page/</span>
                              <input type="text" class="ant-input" value="home" />
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="set-form-item">
                  <div class="ant-row ant-form-item">
                    <div class="ant-col ant-col-6 ant-form-item-label">
                      <label class title="页面背景颜色">页面背景颜色</label>
                    </div>
                    <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
                      <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                          <div>
                            <div
                              style="padding: 5px; background: rgb(255, 255, 255); border-radius: 1px; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px; display: inline-block; cursor: pointer;"
                            >
                              <div
                                style="width: 62px; height: 22px; border-radius: 2px; background: rgb(255, 255, 255); position: relative;"
                              ></div>
                              <span
                                class="color-light"
                                style="position: absolute; right: -120px; top: 0px;"
                              >重置</span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="set-form-item">
                  <div class="ant-row ant-form-item">
                    <div class="ant-col ant-col-6 ant-form-item-label">
                      <label class="ant-form-item-no-colon" title>
                        <span style="opacity: 0;">设置主页</span>
                      </label>
                    </div>
                    <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
                      <div class="ant-form-item-control">
                        <span class="ant-form-item-children">
                          <label class="ant-checkbox-wrapper">
                            <span class="ant-checkbox">
                              <input type="checkbox" class="ant-checkbox-input" value />
                              <span class="ant-checkbox-inner"></span>
                            </span>
                            <span>设为主页</span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

export default html
