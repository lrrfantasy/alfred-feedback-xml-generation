#author: Peter Okma
#modified: Ruoran Liu
import xml.etree.ElementTree as et

class Feedback():
    def __init__(self):
        self.feedback = et.Element('items')

    def __repr__(self):
        return et.tostring(self.feedback)

    def add_item(self, title, subtitle = "", arg = "", valid = "yes", autocomplete = "", icon = "icon.png", filetype = "", icontype = ""):
        item = et.SubElement(self.feedback, 'item', uid=str(len(self.feedback)), arg=arg, valid=valid, autocomplete=autocomplete)
        item.attrib['type'] = filetype

        _title = et.SubElement(item, 'title')
        _title.text = title
        _sub = et.SubElement(item, 'subtitle')
        _sub.text = subtitle
        _icon = et.SubElement(item, 'icon')
        _icon.attrib['type'] = icontype
        _icon.text = icon