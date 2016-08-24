export const htmlTemplate = `

<li> 
   <div>
    <span class="attr-value">
        {{attribute.sum}}
    </span>
    <span class="attr-title">
        {{_utilService.getAttributeTextById(attribute.attribute)}}
    </span>
</div>
</li>


`;