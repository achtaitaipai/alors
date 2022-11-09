import ImagePreview from '.'

const args = {
	src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg',
}

export const story = () => (
	<div style={{ width: '300px', height: '300px' }}>
		<ImagePreview {...args} />
	</div>
)
story.storyName = 'ImagePreview'
