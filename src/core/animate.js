/**
 * Created by jl.gu on 2015/4/14.
 */
define(function () {

    var scroller_bak = function (container, left, right) {
        var self = this;
        this._containerDom = container;
        this._leftBtnDom = left;
        this._rightBtnDom = right;
        // Define how to scroll
        this._scrollNumber = 0; // 滚动序号，避免快速滚动后的回调错误
        this.prettyScroll = function (scrollGoTo, scrollNumber) {
            var runningNumber = scrollNumber || ++this._scrollNumber,
                _containerDom = self._containerDom,
                containerWidth = _containerDom.scrollWidth,
                startPosition = _containerDom.scrollLeft,
                targetPosition = (scrollGoTo === undefined ? startPosition : scrollGoTo),
                offset = 10;
            if (runningNumber !== self._scrollNumber) return;
            if (targetPosition > containerWidth) {
                //if asynLoad pic  todo
                targetPosition = containerWidth;
            }
            else if (targetPosition < 0) targetPosition = 0;
            if (Math.abs(targetPosition - startPosition) <= offset) { //到位后归位
                //todo stop  timeset
                return _containerDom.scrollLeft = targetPosition;
            }
            if (targetPosition > startPosition) { //右移
                _containerDom.scrollLeft = startPosition + offset;
            }
            else { //左移
                _containerDom.scrollLeft = startPosition - offset;
            }
            setTimeout(function () {
                self.prettyScroll(targetPosition, runningNumber);
            }, 8);
        };
        // Add functions to left&right buttons
        left.addEventListener('click', function () {
            var w = self._containerDom.offsetWidth;
            self.prettyScroll(self._containerDom.scrollLeft - w);
        }, false);
        right.addEventListener('click', function () {
            var w = self._containerDom.offsetWidth;
            self.prettyScroll(self._containerDom.scrollLeft + w);
        }, false);
        // Remove Text from #container so we get inserted spaces
        (function (e) {
            var i = e.childNodes.length;
            while (i-- > 0) if (e.childNodes[i].nodeType === 3) e.removeChild(e.childNodes[i]);
        })(container);
    };

    var scroller = function (container, left, right) {
        var self = this;
        this._containerDom = container;
        this._leftBtnDom = left;
        this._rightBtnDom = right;
        this.galleryWidth = container.children[0].offsetWidth;
        // Define how to scroll
        this._scrollNumber = 0; // 滚动序号，避免快速滚动后的回调错误
        this.prettyScroll = function (scrollGoTo, scrollNumber) {
            try {
                var runningNumber = scrollNumber || ++this._scrollNumber,
                    _containerDom = self._containerDom,
                    containerWidth = _containerDom.scrollWidth,
                    startPosition = _containerDom.style.left == "" ? 0 : Number(_containerDom.style.left.replace("px", "")),
                    targetPosition = (scrollGoTo === undefined ? startPosition : scrollGoTo),
                    offset = 10;
                if (runningNumber !== self._scrollNumber) {
                    return;
                }

                if (startPosition == 0 && targetPosition == self.galleryWidth) {
                    return;
                }

                if (targetPosition == 0) {
                    this._leftBtnDom.style.display = "none";
                }
                else if (containerWidth - Math.abs(targetPosition) == self.galleryWidth) {
                    this._rightBtnDom.style.display = "none";
                }

                if (Math.abs(targetPosition) > containerWidth - self.galleryWidth) {
                    //if asynLoad pic  todo
                    targetPosition = -(containerWidth - self.galleryWidth);
                }
                if (Math.abs(targetPosition - startPosition) <= offset) { //到位后归位
                    return _containerDom.style.left = targetPosition + "px";
                }
                if (targetPosition > startPosition) { //右移
                    _containerDom.style.left = ( startPosition + offset) + "px";
                }
                else { //左移
                    _containerDom.style.left = ( startPosition - offset) + "px";
                }
                setTimeout(function () {
                    self.prettyScroll(targetPosition, runningNumber);
                }, 8);
            }
            catch (ex) {
                throw  ex;
            }
        };
        // Add functions to left&right buttons
        left.addEventListener('click', function () {
            var w = self._containerDom.children[0].offsetWidth;
            var containerDomLeft = (self._containerDom.style.left == "" ? 0 : Number(self._containerDom.style.left.replace("px", "")));
            self.prettyScroll(containerDomLeft + w);
            right.style.display = "block";

        }, false);
        right.addEventListener('click', function () {
            var w = self._containerDom.children[0].offsetWidth;
            var containerDomLeft = (self._containerDom.style.left == "" ? 0 : Number(self._containerDom.style.left.replace("px", "")));
            self.prettyScroll(containerDomLeft - w);
            left.style.display = "block";
        }, false);
        // Remove Text from #container so we get inserted spaces
        (function (e) {
            var i = e.childNodes.length;
            while (i-- > 0) if (e.childNodes[i].nodeType === 3) e.removeChild(e.childNodes[i]);
        })(container);
    };

    return scroller;
});
