import React from 'react'

export default function PodcastDetail({params}:{params:{podcastId:string}}) {
	return (
		<p className='text-white-1'>PodcastDetail for {params.podcastId}</p>
	)
}